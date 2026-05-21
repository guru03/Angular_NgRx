import { Component, signal, ViewEncapsulation } from '@angular/core';
import { QuestionStateInterface } from '../state/questions.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectQuestions, selectQuestionsByCategory } from '../state/question.selector';
import { map, Observable } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-ng-rx',
  imports: [AsyncPipe, NgClass],
  templateUrl: './ng-rx.html',
  styleUrls: ['./ng-rx.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgRx {
  activeCategory = signal('All');
  // activeCategory: string = 'All';
  questionList$: Observable<QuestionStateInterface[]> | undefined;
  scrollProgress = signal(0);

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.questionList$ = this.store.select(selectQuestions);
  }

  filterByCategory(category: string): void {
    this.activeCategory.set(category);
    this.questionList$ = this.store.select(selectQuestionsByCategory(category));
  }

  // Not using bellow method, just for testing purpose
  filterByCategoryTesting(category: string) {
    this.activeCategory = signal(category);
    if (category === 'All') {
      this.questionList$ = this.store.select(selectQuestions);
    } else {
      this.questionList$ = this.store.select(selectQuestions).pipe(
        map(questions => questions.filter(q => q.category === category))
      );
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
