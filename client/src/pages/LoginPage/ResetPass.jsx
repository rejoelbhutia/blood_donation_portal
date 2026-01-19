import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/auth/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage(data.message);

      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>

      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <input
            type={`${seePassword ? 'password' : 'text'}`}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-2 pr-10 border-2 rounded-xl focus:outline-none"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={ () => setSeePassword(!seePassword)}>
            {seePassword ? <Eye /> : <EyeOff />}
          </span>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 border border-black rounded-xl hover:rounded-2xl transition cursor-pointer disabled:opacity-60"
        >
          {isLoading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
