import { gsap } from 'gsap';

/**
 * Warm Studio motion presets.
 * Use these instead of arbitrary timings for visual consistency.
 */

export const easing = {
  outLuxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
  inOutLuxe: 'cubic-bezier(0.65, 0, 0.35, 1)',
  outExpo: 'expo.out',
  inOutExpo: 'expo.inOut',
} as const;

export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  cinematic: 1.2,
} as const;

/**
 * Fade up — most common entrance animation.
 * Use on hero text, section headers, cards.
 */
export const fadeUp = (
  target: gsap.TweenTarget,
  opts: { delay?: number; duration?: number; y?: number } = {}
) => {
  return gsap.from(target, {
    opacity: 0,
    y: opts.y ?? 24,
    duration: opts.duration ?? duration.slow,
    delay: opts.delay ?? 0,
    ease: easing.outExpo,
  });
};

/**
 * Stagger reveal — for lists, grids, nav items.
 */
export const staggerReveal = (
  targets: gsap.TweenTarget,
  opts: { delay?: number; stagger?: number; y?: number } = {}
) => {
  return gsap.from(targets, {
    opacity: 0,
    y: opts.y ?? 16,
    duration: duration.slow,
    delay: opts.delay ?? 0,
    stagger: opts.stagger ?? 0.06,
    ease: easing.outExpo,
  });
};

export { gsap };
