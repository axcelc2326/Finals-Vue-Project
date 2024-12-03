<template>
  <div>
    <!-- Header Section -->
    <header class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div class="container">
        <a class="navbar-brand brand-title" href="#">Synex Car Rental</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link text-light" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#how-it-works">How It Works</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#browse">Browse Cars</a>
            </li>
          </ul>
        </div>
      </div>
    </header>


    <!-- Hero Section -->
    <section class="hero bg-primary text-white text-center ">
      <div class="container">
        <h1 class="display-4 mb-3">Drive Your Dreams</h1>
        <p class="lead">
          Reliable, affordable, and convenient car rentals at your fingertips.
        </p>
        <button class="btn btn-light btn-lg mt-3" @click="scrollToCars">
          Get Started
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Why Choose Us?</h2>
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="icon-box">
              <i class="fas fa-car-side fa-3x text-primary mb-3"></i>
              <h4>Wide Range of Cars</h4>
              <p>
                From compact cars to luxury SUVs, we cater to all needs and
                preferences.
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="icon-box">
              <i class="fas fa-tags fa-3x text-primary mb-3"></i>
              <h4>Affordable Pricing</h4>
              <p>
                Competitive rates ensure you get value without compromising on
                quality.
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="icon-box">
              <i class="fas fa-laptop fa-3x text-primary mb-3"></i>
              <h4>Convenient Booking</h4>
              <p>
                Our user-friendly platform makes booking your ride quick and
                secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">How It Works</h2>
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="icon-box">
              <i class="fas fa-search fa-3x text-primary mb-3"></i>
              <h4>Browse Our Fleet</h4>
              <p>Explore our extensive collection of vehicles to find your match.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="icon-box">
              <i class="fas fa-calendar-check fa-3x text-primary mb-3"></i>
              <h4>Book Online</h4>
              <p>Secure your ride in minutes with our simple online booking system.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="icon-box">
              <i class="fas fa-car fa-3x text-primary mb-3"></i>
              <h4>Pick Up & Drive</h4>
              <p>Collect your car and hit the road. Enjoy your journey without worries!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section id="browse" class="text-center py-5">
      <div class="container">
        <h2 class="mb-3">Find Your Perfect Ride</h2>
        <p class="mb-4">Browse our fleet and book the car that fits your journey.</p>
        <button class="btn btn-primary btn-lg mt-3" @click="scrollToCars">
          Browse Cars
        </button>
      </div>
    </section>

    <!-- Car Form & List -->
    <section>
      <CarForm />
      <CarList ref="carList" />
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-3">
      <p>&copy; 2024 Synex Car Rental Service | All rights reserved.</p>
      <p>
        Follow us on
        <a href="#" class="text-warning">Facebook</a>,
        <a href="#" class="text-warning">Instagram</a>, and
        <a href="#" class="text-warning">Twitter</a>.
      </p>
    </footer>
  </div>
</template>

<script>
import CarForm from "../components/CarForm.vue";
import CarList from "../components/CarList.vue";

export default {
  components: {
    CarForm,
    CarList,
  },
  methods: {
    scrollToCars() {
      const carList = this.$refs.carList;
      carList.$el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  padding: 15px;
}

/* Ensure body content adjusts to the navbar's height */
body {
  padding-top: 70px; /* Adjust based on navbar height */
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #007bff, #1e90ff);
  padding-top: 110px; /* Adds space to avoid overlap with the navbar */
  padding-bottom: 40px; /* Ensure proper spacing */
}

/* Button inside Hero Section */
.hero .btn {
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 1.2rem;
}

/* Icon Box */
.icon-box {
  background-color: #1e90ff;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgb(75, 75, 75);
  transition: transform 0.5s;
}

.icon-box:hover {
  transform: translateY(-5px);
}

.brand-title {
  font-size: 2rem; /* Adjust as needed */
  font-weight: bold;
  color: #007bff; /* Optional: Ensure the color matches your primary theme */
}

/* Footer */
footer {
  font-size: 0.9rem;
  margin-top: 20px;
}
</style>
