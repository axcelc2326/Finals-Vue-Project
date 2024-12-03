<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Add a Car</h2>
    <form @submit.prevent="addCar" class="needs-validation" novalidate>
      <!-- Form container with border -->
      <div class="form-container">
        <!-- Car Name -->
        <div class="mb-3">
          <label for="name" class="form-label">Car's Owner:</label>
          <input
            type="text"
            id="name"
            v-model="car.name"
            class="form-control"
            placeholder="Enter car's Owner"
            required
          />
          <div class="invalid-feedback">Car name is required.</div>
        </div>

        <!-- Model -->
        <div class="mb-3">
          <label for="model" class="form-label">Model:</label>
          <input
            type="text"
            id="model"
            v-model="car.model"
            class="form-control"
            placeholder="Enter model"
            required
          />
          <div class="invalid-feedback">Model is required.</div>
        </div>

        <!-- Price -->
        <div class="mb-3">
          <label for="price" class="form-label">Price per Day ($):</label>
          <input
            type="number"
            id="price"
            v-model="car.price"
            class="form-control"
            min="1"
            placeholder="Enter price per day"
            required
          />
          <div class="invalid-feedback">Please enter a valid price.</div>
        </div>

        <!-- Availability -->
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            id="availability"
            v-model="car.availability"
            class="form-check-input"
          />
          <label for="availability" class="form-check-label">Available</label>
        </div>

        <!-- Category -->
        <div class="mb-3">
          <label for="category" class="form-label">Category:</label>
          <select
            id="category"
            v-model="car.category"
            class="form-select"
            required
          >
            <option disabled value="">-- Select a Category --</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Coupe">Coupe</option>
          </select>
          <div class="invalid-feedback">Please select a category.</div>
        </div>

        <!-- Submit Button -->
        <div class="d-grid">
          <button type="submit" class="btn">Add Car</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      car: {
        name: "",
        model: "",
        price: 0,
        availability: true,
        category: "",
      },
    };
  },
  methods: {
    async addCar() {
      try {
        const carsCollection = collection(db, "cars");
        await addDoc(carsCollection, this.car);
        alert("Car added successfully!");
        this.resetForm();
      } catch (error) {
        console.error("Error adding car: ", error);
      }
    },
    resetForm() {
      this.car = {
        name: "",
        model: "",
        price: 0,
        availability: true,
        category: "",
      };
    },
  },
};
</script>

<style scoped>
/* Form container styling with border, padding, and shadow */
.form-container {
  color: white;
  border-radius: 8px;
  padding: 20px;
  background-color: #1e90ff;
  box-shadow: 2px 4px 6px rgb(75, 75, 75);
}

/* Optional: Adjust padding for container */
.container {
  max-width: 600px;
}

/* Optional: Add some margin at the top for the header */
h2 {
  margin-bottom: 20px;
}

/* Style for invalid feedback */
.invalid-feedback {
  font-size: 0.9rem;
  color: #dc3545; /* Red color for error messages */
}

.btn{
  background-color: #28a745;
  color: white;
}

.btn:hover{
  background-color: #207233;
  color: white;
}
</style>
