export const GET_WALNUT_CONTENT = `query {
  walnutContentCollection {
    items {
      title
      subtitle
      button
      video {
        url
      }
    }
  }
}`;
