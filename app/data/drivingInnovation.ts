export const GET_DRIVING_INNOVATION = `query {
  drivingInnovationCollection {
    items {
			title
      firstSubtitle
      secondSubtitle
      image {
        url
      }
    }
  }
}`;
