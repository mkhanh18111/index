document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const dob = document.getElementById('dob');
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById('phone');
    const hobbies = document.querySelectorAll('input[name="hobbies[]"]:checked');
    const other = document.getElementById('other');

    if (!name.value || !dob.value || !gender || !phone.value || !hobbies.length) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    alert('Đăng ký thành công!');
    form.reset();
  });
});