import { MouseEventHandler, useRef } from "react";

export const useFaqItem = () => {
  let animation: Animation | null = null;
  let isClosing = false;
  let isExpanding = false;
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const onAnimationFinish = (open: boolean) => {
    if (detailsRef.current) {
      detailsRef.current.open = open;
      detailsRef.current.open = open;
      // Clear the stored animation
      animation = null;
      // Reset isClosing & isExpanding
      isClosing = false;
      isExpanding = false;
      // Remove the overflow hidden and the fixed height
      detailsRef.current.style.height = detailsRef.current.style.overflow = "";
    }
    // Set the open attribute based on the parameter
  };
  const expand = () => {
    if (detailsRef.current && summaryRef.current && contentRef.current) {
      // Set the element as "being expanding"
      isExpanding = true;

      // Get the current fixed height of the element
      const startHeight = `${detailsRef.current.offsetHeight}px`;
      // Calculate the open height of the element (summary height + content height)
      const endHeight = `${
        summaryRef.current.offsetHeight + contentRef.current.offsetHeight
      }px`;

      // If there is already an animation running
      if (animation) {
        // Cancel the current animation
        animation.cancel();
      }

      // Start a WAAPI animation
      animation = detailsRef.current.animate(
        {
          // Set the keyframes from the startHeight to endHeight
          height: [startHeight, endHeight],
        },
        {
          // If the duration is too slow of fast, you can change it here
          duration: 400,
          // You can also change the ease of the animation
          easing: "ease-out",
        }
      );
      // When the animation is complete, call onAnimationFinish()
      animation.onfinish = () => onAnimationFinish(true);
      // If the animation is cancelled, isExpanding variable is set to false
      animation.oncancel = () => (isExpanding = false);
    }
  };
  const open = () => {
    if (detailsRef.current) {
      detailsRef.current.style.height = `${detailsRef.current.offsetHeight}px`;
      // Force the [open] attribute on the details element
      detailsRef.current.open = true;
      // Wait for the next frame to call the expand function
      window.requestAnimationFrame(() => expand());
    }
  };
  const shrink = () => {
    isClosing = true;
    if (detailsRef.current && summaryRef.current) {
      const startHeight = `${detailsRef.current.offsetHeight}px`;
      // Calculate the height of the summary
      const endHeight = `${summaryRef.current.offsetHeight}px`;

      // If there is already an animation running
      if (animation) {
        // Cancel the current animation
        animation.cancel();
      }

      // Start a WAAPI animation
      animation = detailsRef.current.animate(
        {
          // Set the keyframes from the startHeight to endHeight
          height: [startHeight, endHeight],
        },
        {
          // If the duration is too slow or fast, you can change it here
          duration: 400,
          // You can also change the ease of the animation
          easing: "ease-out",
        }
      );

      // When the animation is complete, call onAnimationFinish()
      animation.onfinish = () => onAnimationFinish(false);
      // If the animation is cancelled, isClosing variable is set to false
      animation.oncancel = () => (isClosing = false);
    }
  };

  const handleSummaryClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    if (detailsRef.current) {
      (detailsRef.current as HTMLDetailsElement).style.overflow = "hidden";
      if (isClosing || !detailsRef.current.open) {
        open();
        // Check if the element is being openned or is already open
      } else if (isExpanding || detailsRef.current.open) {
        shrink();
      }
    }
  };
  return {
    detailsRef,
    handleSummaryClick,
    summaryRef,
    contentRef,
  };
};
