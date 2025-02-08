import { Link } from "@inertiajs/react"

export default function Learn({posts}) {
    return(<>
        <div>
            {posts.data.map(post => (
                <div key={post.id} className="p-4 border">
                    {post.body}
                </div>
            ))}
        </div>
        
        <div className="py-4 px-4">
            {posts.links.map(link => (
                link.url ? 
                    <Link 
                        key={link.label} 
                        href={link.url}
                        dangerouslySetInnerHTML={{__html: link.label }}
                        className={`p-1 mx-1 ${link.active ? 'font-bold' : '' }`} 
                    />
                :
                <span>
                    <Link 
                        key={link.label} 
                        className='p-1 mx-1 text-slate-300'
                    />
                </span>
            ))}
        </div>
    </>);
}