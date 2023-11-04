export const GET_CAREER = `query {
  careerCollection {
    items {
      title
      firstSubtitle
      secondSubtitle
      thirdSubtitle
      firstImage {
        url
      }
      secondImage {
        url
      }
      thirdImage {
        url
      }
      fourthImage {
        url
      }
    }
  }
}`;
