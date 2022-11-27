//      Variables Declaration
const navBar = document.querySelector('nav > ul');
const mainContent = document.querySelector('main');
const lastSection = document.createElement('section');
const lastDiv = document.createElement('div');

//      Append The Last Section And The Last Div
lastSection.appendChild(lastDiv);
mainContent.appendChild(lastSection);

//      Variables Declaration
const allSections = document.querySelectorAll('section');
const anchorStyle = 'color: #000; padding: 1rem; display: inline-block; text-decoration: none';

//      "For Loop", To Add The Anchors
for (let i = 1; i <= allSections.length; i++) {
  const anchor = document.createElement('a');
  anchor.innerText = `Section ${i}`;
  anchor.href = `#section${i}`;
  navBar.appendChild(anchor);
}

//      Storing All The Anchors In A Variable
const allAnchors = document.querySelectorAll('a');

//      For Each Anchor, Add Some Styles and Event Listeners 
allAnchors.forEach(anchor => {
  anchor.style.cssText = anchorStyle;
  anchor.addEventListener('mouseover', () => {
    anchor.style.color = '#fff';
    anchor.style.backgroundColor = '#333';
  });
  anchor.addEventListener('mouseout', () => {
    anchor.style.cssText = anchorStyle;
  });
  anchor.addEventListener('click', click => {
    anchor.style.color = '#fff';
    anchor.style.backgroundColor = '#333';
    click.preventDefault();
  document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//      Last Section Content & Attributes
lastSection.id = "section4";
lastSection.setAttribute('data-nav', "Section 4");
lastDiv.classList = "landing__container";
lastDiv.innerHTML = "<h2>Section 4</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p> <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>";

//      Set Class "active" For The Section In Viewport
window.addEventListener('scroll', () => {
  allSections.forEach(section => {
    if (section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150)
      section.classList.add("active");
    else
      section.classList.remove("active");
  });
});

//      Styling The Active Anchor
window.onscroll = () => {
  allAnchors.forEach(anchor => {
    const section = document.querySelector(anchor.getAttribute('href'));
    if (section.classList.contains("active")) {
      anchor.style.backgroundColor = '#333';
      anchor.style.color = '#fff';
    }
    else {
      anchor.style.color = '#000';
      anchor.style.backgroundColor = '#fff';
    }
  });
};
