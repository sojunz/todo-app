export default function SettingsPage() {
    return (
      <div className="page-container">
        <h2>Settings</h2>

        <img src="/setting.jpeg" alt="Settings" className="settings-image" />
  
        <div className="section-box">
          <label>Theme</label>
          <input type="text" placeholder="Light / Dark" />
  
          <label>Notifications</label>
          <input type="text" placeholder="On / Off" />
  
          <button className="page-button">Update</button>
        </div>
      </div>
    );
  }
  