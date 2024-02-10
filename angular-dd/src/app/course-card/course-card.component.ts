import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CommonModule } from "@angular/common";
@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
  standalone: true,
  imports: [CommonModule],
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  onCourseView() {
    this.courseSelected.emit(this.course);
  }
}
