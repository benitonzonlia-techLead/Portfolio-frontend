import { animate, style, transition, trigger, keyframes } from '@angular/animations';

export const fadeSlideUp = trigger('fadeSlideUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeInCascade = trigger('fadeInCascade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('{{duration}}ms {{delay}}ms ease-out', style({ opacity: 1 }))
  ], { params: { delay: 0, duration: 400 } })
]);

export const fadeInCenter = trigger('fadeInCenter', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate('400ms 100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('350ms 50ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const slideLeftFadeIn = trigger('slideLeftFadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const fadeScale = trigger('fadeScale', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate('400ms 100ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);
