function print(what){
    console.log(what)
}

export function fav_icon(src){
  const linkElement = document.querySelector('link[rel="shortcut icon"]');

  if (linkElement) {
    // If a favicon link element already exists, update its href attribute.
    linkElement.href = src;
  } else {
    // If a favicon link element doesn't exist, create a new one and add it to the document head.
    const newLinkElement = document.createElement('link');
    newLinkElement.rel = 'shortcut icon';
    newLinkElement.href = src;
    document.head.appendChild(newLinkElement);
  }
}

export function make(elementType) {
  let element = document.createElement(elementType);

  return {
    from: function (id) {
      element.id = id;
      return this;
    },
    to: function (parentSelector) {
      let parent = document.querySelector(parentSelector);
      if (!parent) {
        throw new Error("Parent element not found.");
      }
      parent.appendChild(element);
      return this;
    },
    content: function (textContent) {
      element.textContent = textContent;
      return this;
    },
    build: function () {
      return element;
    },
  };
}
