FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

# Install required packages and PHP extensions
RUN apk add --no-cache \
    bash \
    zip \
    unzip \
    curl \
    git \
    mysql-client \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    freetype-dev \
    oniguruma-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install gd mbstring pdo pdo_mysql

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy Laravel project files
COPY . ./

# Create necessary Laravel storage directories before setting permissions
RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Use non-root user for security
USER www-data

# Start PHP-FPM
CMD ["php-fpm"]
