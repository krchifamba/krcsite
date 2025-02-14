<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $posts = Post::latest()->paginate(6);
        $posts = Post::latest()->paginate(5);
        return inertia('Home', ['name' => 'Goku', 'posts' => $posts]);
    }

    public function about()
    {
        // $about = 'about me';
        return inertia('About');
    }

    public function learn()
    {
        $posts = Post::latest()->paginate(5);
        return inertia('Learn', ['posts' => $posts]);
    }

    public function header()
    {
        $name = 'Goku';
        return inertia('Header', ['name' => $name]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
