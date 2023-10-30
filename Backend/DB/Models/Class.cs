﻿using System;
using System.Collections.Generic;

namespace Backend.DB.Models;

public partial class Class
{
    public int ClassId { get; set; }

    public int MentorId { get; set; }

    public string CourseId { get; set; } = null!;

    public bool? IsPractice { get; set; }

    public int? CurrentStudent { get; set; }

    public int? LimitStudent { get; set; }

    public string? Location { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual ICollection<Lesson> Lessons { get; set; } = new List<Lesson>();

    public virtual Mentor Mentor { get; set; } = null!;

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
