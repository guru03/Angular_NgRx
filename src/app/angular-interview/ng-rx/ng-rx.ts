import { Component, ViewEncapsulation } from '@angular/core';
import { QuestionsState, QuestionStateInterface } from '../state/questions.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectQuestions } from '../state/question.selector';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-ng-rx',
  imports: [AsyncPipe],
  templateUrl: './ng-rx.html',
  styleUrls: ['./ng-rx.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgRx {
  questionList$: Observable<QuestionStateInterface[]> | undefined;

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer ) { } 

  ngOnInit(): void {
    this.questionList$ = this.store.select(selectQuestions);
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.questionList$ = this.store.select(selectQuestions);
    } else {
      this.questionList$ = this.store.select(selectQuestions).pipe(
        map(questions => questions.filter(q => q.category === category))
      );
    }
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
