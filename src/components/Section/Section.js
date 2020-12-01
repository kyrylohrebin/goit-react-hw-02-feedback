import React from 'react';

class Section extends React.Component {
  state = {
    title: 'Please leave feedback',
  };
  render() {
    return (
      <section>
        <h2>{this.state.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

/* const Section = ({ title, children }) => {
  console.log(children);
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}; */

export default Section;
