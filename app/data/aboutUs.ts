export const GET_ABOUT_US = `query {
  aboutUsCollection {
    items {
      title
      firstSubtitle
      secondSubtitle
      thirdSubtitle
      fourthSubtitle
      image {
        url
      }
      name
      specialty
    }
  }
}`;
