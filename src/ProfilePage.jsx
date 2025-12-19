export default function ProfilePage() {
    return (
      <div className="page-container">
        <h2>Your Profile</h2>
  
        <div className="section-box">
          <label>Name</label>
          <input type="text" placeholder="SoHyung" />
  
          <label>Email</label>
          <input type="email" placeholder="example@email.com" />
  
          <button className="page-button">Save</button>
        </div>
      </div>
    );
  }
  