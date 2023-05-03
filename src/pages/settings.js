import { useContext } from "react";
import { GlobalContext } from "src/pages/_app";

const Settings = () => {
  const { userInfo } = useContext(GlobalContext);

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input className="form-control" type="text" placeholder="URL of profile picture" defaultValue={userInfo?.user?.image} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Your Name" defaultValue={userInfo?.user?.username} />
                </fieldset>
                <fieldset className="form-group">
                  <textarea className="form-control form-control-lg" rows="8" placeholder="Short bio about you" defaultValue={userInfo?.user?.bio}></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" defaultValue={userInfo?.user?.email} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
              </fieldset>
            </form>

            <hr />
            <button className="btn btn-outline-danger">Or click here to logout.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
