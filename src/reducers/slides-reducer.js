let slide_state = {
    slideIndex: 0,
    showingSlides: false
}
// See http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
// Must make a shallow copy to trigger the update
export default (state = slide_state, action) => {
  let newState = {...state};
  switch (action.type) {
    case 'NEXT_SLIDE':
        // Start showing first slide now if we aren't already
        if (!state.showingSlides) {
            newState.showingSlides = true;
            return newState;
        }
        // We were already showing slides, so advance to the next one
        newState.slideIndex = state.slideIndex+1;
        // Stop showing slides when we reach the end, and loop back
        if (newState.slideIndex >= action.numSlides) {
            // We have reached the last slide, go back to the attack screen
            newState.slideIndex = 0;
            newState.showingSlides = false;
        }
        return newState;
    case 'STOP_SLIDES':
        newState.slideIndex = 0;
        newState.showingSlides = false;
        return newState;
    default:
      return state
  }
}