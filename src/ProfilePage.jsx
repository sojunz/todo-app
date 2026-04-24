export default function ProfilePage() {
    return (
      <div className="page-container">
        <h2>Your Profile</h2>
        <img src="/Profile.JPG" alt="Profile Image" className="settings-image" />
        <div className="section-box">
          <label>Name</label>
          <input type="text" placeholder="Ur Name" />
  
          <label>Email</label>
          <input type="email" placeholder="example@email.com" />
  
          <button className="page-button">Save</button>
        </div>
      </div>
    );
  }
  