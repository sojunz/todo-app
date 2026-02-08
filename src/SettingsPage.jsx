import "./SettingPage.css";

function SettingsPage() {
  return (
    <div className="settings-page">
      <h2>Your Settings</h2>

      <img src="Setting.jpeg" className="settings-image" alt="setting" />

      <div className="settings-field">
        <label>Theme</label>
        <input type="text" placeholder="Light / Dark" />
      </div>

      <div className="settings-field">
        <label>Notifications</label>
        <input type="text" placeholder="On / Off" />
      </div>

      <button className="settings-button">Save</button>
    </div>
  );
}

export default SettingsPage;

