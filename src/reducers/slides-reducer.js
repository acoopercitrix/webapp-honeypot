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
        // Each time mouse is clicked, we stop/start slideshow
        newState.showingSlides = !state.showingSlides;
        // Start showing slides now if we aren't already
        if (!state.showingSlides) {
            return newState;
        }
        // We were already showing slides, so advance to the slideshow
        newState.slideIndex = state.slideIndex+1;
        // Loop back to the first slideshow once we reach the end
        if (newState.slideIndex >= action.numSlides) {
            newState.slideIndex = 0;
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