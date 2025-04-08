// src/app/components/projects/projects.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // استيراد CommonModule
import { Project } from '../../project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],  // إضافة CommonModule هنا
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built using Angular and Bootstrap.',
      technologies: ['Angular', 'Bootstrap', 'HTML', 'CSS'],
      imageUrl: 'assets/images/portfolio.png',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/portfolio1'
    },
    {
      name: 'Manga App',
      description: 'A manga reader app built using TypeScript and Angular.',
      technologies: ['TypeScript', 'Angular', 'HTML', 'CSS'],
      imageUrl: 'assets/images/manga_site.png',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/manga_app',
      Live_View: 'https://manga-site-7f5l.vercel.app/'
    },
    {
      name: 'Easy Bank',
      description: 'A modern and responsive banking app built using TypeScript and Angular.',
      technologies: ['TypeScript', 'Angular', 'HTML', 'CSS'],
      imageUrl: 'assets/images/easy_bank.png',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/easyBank'
    },
    {
      name: 'Manga Site',
      description: 'A manga website with a collection of manga chapters and categories.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imageUrl: 'assets/images/manga_site.png',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/manga_site'
    },
    {
      name: 'Criativo Website',
      description: 'A responsive website built using HTML, CSS, JavaScript, and SASS.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SASS'],
      imageUrl: 'https://fakeimg.pl/250x100/',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/criativo'
    },
    {
      name: 'Clothes Store',
      description: 'A clothes store website built using HTML and CSS.',
      technologies: ['HTML', 'CSS'],
      imageUrl: 'https://fakeimg.pl/250x100/',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/clothes_store'
    },
    {
      name: 'Watch Store',
      description: 'A modern and responsive watch store website built using HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://fakeimg.pl/250x100/',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/chorno'
    },
    {
      name: 'Tourism Website',
      description: 'A tourism website showcasing various destinations.',
      technologies: ['HTML', 'CSS'],
      imageUrl: 'https://fakeimg.pl/250x100/',  // استبدل بمسار الصورة الفعلي
      githubLink: 'https://github.com/Abdelrhman-hefny/tourism-website'
    },
  ];

}
