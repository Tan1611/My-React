import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDeleteTodo = (job) => {
    this.props.delete(job);
  };

  render() {
    console.log(">>>call rerender: ", this.props);
    let { jobs } = this.props;
    let { showJobs } = this.state;
    console.log(">>>check job: ", jobs);
    return (
      <>
        {showJobs === false ? (
          <div className="Show">
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {jobs.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      {item.title} - {item.salary}{" "}
                      <span>
                        <button
                          className="delete"
                          onClick={() => this.handleDeleteTodo(item)}
                        >
                          Delete
                        </button>
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="Hide">
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}{" "}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { jobs } = props;
//   console.log(props);

//   return (
//     <>
//       <div className="job-list">
//         {jobs.map((item, index) => {
//           if (+item.salary >= "600") {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           } else {
//             return "";
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
