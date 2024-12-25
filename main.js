document.querySelector(".generate-btn").addEventListener("click", () => {
  const mainContent = document.querySelector(".main");
  const ticketContent = document.querySelector(".ticket-main");
  const fullNameInput = document.querySelector(".name-input");
  const emailInput = document.querySelector(".email-input");
  const githubInput = document.querySelector(".github-input");
  const avatarInput = document.querySelector(".avatar-input");
  const userName = document.querySelector(".user-name-span");
  const userEmail = document.querySelector(".email-text");
  const userGithub = document.querySelector(".user-github");
  const userImage = document.querySelector(".user-image");

  // Function to validate email
  const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

  // Check all fields
  if (!fullNameInput.value || !emailInput.value || !githubInput.value || avatarInput.files.length === 0) {
      alert("Please fill all the fields!");
      return;
  }

  // Validate email
  if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address!");
      return;
  }

  mainContent.classList.toggle("is-active");
  ticketContent.classList.toggle("is-active");

  // Populate ticket data
  userName.innerText = fullNameInput.value;
  userEmail.innerText = emailInput.value;
  userGithub.innerText = githubInput.value;

  // Display uploaded image
  const file = avatarInput.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
          userImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});