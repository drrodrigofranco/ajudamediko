/**
 * Tracks the "get directions" (conversion_event_get_directions) event 
 * using the global Google Tag (gtag.js) script.
 */
export const trackGetDirections = () => {
  if (typeof window !== 'undefined') {
    const globalGtag = (window as any).gtag;
    if (typeof globalGtag === 'function') {
      try {
        globalGtag('event', 'conversion_event_get_directions', {
          event_category: 'engagement',
          event_label: 'como_chegar_maps_click'
        });
        console.log('[gtag] Successfully sent event conversion_event_get_directions');
      } catch (error) {
        console.error('[gtag] Error running gtag conversion event:', error);
      }
    } else {
      console.warn('[gtag] gtag function not found on window object.');
    }
  }
};
