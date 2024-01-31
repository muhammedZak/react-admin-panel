import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({ inputs }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="profile"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="johndoe" />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+91 *****9898" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="*****" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="2nd str , NewYork" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
