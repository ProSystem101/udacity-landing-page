//      Variables Declaration
const navBar = document.querySelector('nav > ul');
const mainContent = document.querySelector('main');
const lastSection = document.createElement('section');
const lastDiv = document.createElement('div');
const anchorStyle = 'color: #000; padding: 1rem; display: inline-block; text-decoration: none';

//      "For Loop" To Add The Anchors
for (let i = 1; i < 5; i++) {
  const item = document.createElement('a');
  item.innerText = `Section ${i}`;
  item.href = `#section${i}`;
  navBar.appendChild(item);
}

//      For Each Anchor Add Some Styles and Event Listeners 
document.querySelectorAll('nav > ul > a').forEach((anchor) => {
  anchor.style.cssText = anchorStyle;
  anchor.addEventListener('mouseover', () => {
    anchor.style.color = '#fff';
    anchor.style.backgroundColor = '#333';
  });
  anchor.addEventListener('mouseout', () => {
    anchor.style.cssText = anchorStyle;
  });
  anchor.addEventListener('click', (click) => {
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
lastSection.appendChild(lastDiv);
mainContent.appendChild(lastSection);
