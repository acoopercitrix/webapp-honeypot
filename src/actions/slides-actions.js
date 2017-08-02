export const nextSlide = (numSlides) => {
    return {
        type: 'NEXT_SLIDE',
        numSlides: numSlides
    };
}
export const stopSlides = () => {
    return {
        type: 'STOP_SLIDES'
    };
}