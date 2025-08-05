import {
  trigger,
  transition,
  style,
  query,
  animate,
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 }))
    ], { optional: true })
  ])

]);
