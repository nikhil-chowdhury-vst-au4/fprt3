import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Landing from "../components/layout/Landing";
import { getAllPosts } from "../actions/postActions";

const LandingPage = ({ getAllPosts, allposts }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  console.log(allposts);
  return <Landing allposts={allposts} />;
};

const mapStateToProps = (state) => {
  return {
    allposts: state.post.allposts,
  };
};

LandingPage.propTypes = {
  allposts: PropTypes.array.isRequired,

  getAllPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllPosts })(LandingPage);
