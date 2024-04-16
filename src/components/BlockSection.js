import React from "react";
// Import the CSS file for styling

const BlockSection = () => {
  return (
    <div className="block-section">
      <div className="block-container">
        <div className="content">
          <h2>Blog</h2>
          <p>Why Swift UI Should Be on the Radar of Every Mobile Developer</p>
          <button className="start-learning-btn">Start Learning Now</button>
        </div>
        <div className="image-container">
          <img
            src="https://via.placeholder.com/400"
            alt="Swift UI"
            className="curve-img"
          />
        </div>
      </div>
      <div className="blog-list">
        <h3>Reading Blog List</h3>

        <div className="image-boxes">
          <div className="image-box">
            <img src="https://via.placeholder.com/150" alt="Image 1" />
            <div className="heading-box">UX/</div>
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/150" alt="Image 2" />
            <div className="heading-box">React</div>
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/150" alt="Image 3" />
            <div className="heading-box">PHP</div>
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/150" alt="Image 4" />
            <div className="heading-box">JavaScript</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="related-blog">
          <div className="related-blog-header">
            <h2>Related Blog</h2>
            <div className="see-all">
              <p>See All</p>
            </div>
          </div>
        </div>
        <div className="curved-box">
          <div className="custom-image-boxes">
            <img src="https://via.placeholder.com/150" alt="Blog img" />
          </div>
          <div className="content1">
            <h2>
              class add 30 million to its balance sheet for zoom frieandly
            </h2>
            <div className="user-info">
              <img src="profile-pic.jpg" alt="Profile Pic" />
              <div className="user-name">
                <p>Lina</p>
              </div>
            </div>
            <div className="description">
              <p>Paragraph</p>
            </div>

            <button class="read-more-btn">Read More</button>
            <div className="views-count">
              <span>100 Views</span>
            </div>
          </div>
        </div>
        <div className="curved-box">
          <div className="custom-image-boxes">
            <img src="https://via.placeholder.com/150" alt="Blog img" />
          </div>
          <div className="content1">
            <h2>
              class add 30 million to its balance sheet for zoom frieandly
            </h2>
            <div className="user-info">
              <img src="profile-pic.jpg" alt="Profile Pic" />
              <div className="user-name">
                <p>Lina</p>
              </div>
            </div>
            <div className="description">
              <p>Paragraph</p>
            </div>
            <button class="read-more-btn">Read More</button>
            <div className="views-count">
              <span>100 Views</span>
            </div>
          </div>
        </div>
        <div class="navigation">
    <button class="nav-button prev"> &lt; </button>
    <button class="nav-button next">  &gt; </button>
     </div>
    </div>
      <div className="article-sec">
      <div className="article-heading">
          <div className="article-header">
            <h2>News & Article</h2>
            <div className="article-see-all">
              <p>See All</p>
            </div>
          </div>
        </div>
        <div className="article-container">
        <div className="article-box">
        <div className="article-image-boxes">
            <img src="https://via.placeholder.com/150" alt="article img" />
          </div>
          <div className="article-content">
            <div className="line1">
            <div className="design">
              <p>Design</p></div>
            <div className="time">
              <p><span>&#128340;</span>3 months</p></div>
            </div>
            <h2>AWS certified solution architect</h2>
            <p>description we will put...</p>
            <div className="article-userinfo">
              <img src="profile-pic.jpg" alt="Profile Pic" />
              <div className="article-username">
                <p>Lina</p>
              </div>
              <div className="price">
                <p>$100</p>
                <h2>$80</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="article-box">
        <div className="article-image-boxes">
            <img src="https://via.placeholder.com/150" alt="article img" />
          </div>
          <div className="article-content">
          <div className="line1">
            <div className="design">
              <p>Design</p></div>
            <div className="time">
              <p><span>&#128340;</span>3 months</p></div>
            </div>
            <h2>AWS certified solution architect</h2>
            <p>description we will put...</p>
            <div className="article-userinfo">
              <img src="profile-pic.jpg" alt="Profile Pic" />
              <div className="article-username">
                <p>Lina</p>
              </div>
              <div className="price">
                <p>$100</p>
                <h2>$80</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="article-box">
        <div className="article-image-boxes">
            <img src="https://via.placeholder.com/150" alt="article img" />
          </div>
          <div className="article-content">
          <div className="line1">
            <div className="design">
              <p>Design</p></div>
            <div className="time">
              <p><span>&#128340;</span>3months</p></div>
            </div>
            <h2>AWS certified solution architect</h2>
            <p>description we will put...</p>
            <div className="article-userinfo">
              <img src="profile-pic.jpg" alt="Profile Pic" />
              <div className="article-username">
                <p>Lina</p>
              </div>
              <div className="price">
                <p>$100</p>
                <h2>$80</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlockSection;
