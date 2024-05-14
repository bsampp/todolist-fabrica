<?php

namespace App\Http\Controllers;
use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $tasks = Task::where('user_id', auth()->id())->get();
        return Inertia::render('Dashboard', ['tasks' => $tasks]);
    }
}
