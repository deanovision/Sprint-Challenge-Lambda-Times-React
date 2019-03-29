## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes validate the data type according to what the user assigns it to be. This is important in my opinion for multiple reasons. As your projects begin to grow larger the chances for bugs increases and having the data being passed around evaluated helps you catch mistakes or unintended changes to the data you pass.

- [ ] Describe a life-cycle event in React?

life-cycle events are methods on the class component that controls how state is rendered and updated the cycle goes from birth to growth to death which happen on the constructor where state is initalized then on CDM and finally death on CWU

- [ ] Explain the details of a Higher Order Component?

HOC use conditional logic to determine what gets rendered to the screen. The HOC takes in a component as a callback and sets the condition within its function for when the component will be displayed. The HOC doesn't actually render to the screen it must first be set to a variable and supplied a component as its CB. That variable can then be rendered

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

styled components
reactstrap
css
