export const updateObject = (oldObject,updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// convinience method to update one object with another