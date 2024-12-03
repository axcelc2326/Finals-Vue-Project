<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Available Cars</h2>
    <div class="row">
      <div
        v-for="car in cars"
        :key="car.id"
        class="col-md-6 col-lg-4 mb-4"
      >
        <div class="card shadow-sm border-light">
          <img
            v-if="car.image"
            :src="car.image"
            class="card-img-top"
            alt="Car image"
          />
          <div class="card-body">
            <h5 class="card-title">
              <strong>Owner: </strong>{{ car.name }}
            </h5>
            <p>
              <strong>Model - </strong>({{ car.model }})
            </p>
            <p class="card-text">
              <strong>Category:</strong> {{ car.category }}
            </p>
            <p class="card-text">
              <strong>Price per Day:</strong> ${{ car.price }}
            </p>
            <p
              class="badge"
              :class="car.availability ? 'bg-success' : 'bg-danger'"
            >
              {{ car.availability ? "Available" : "Occupied" }}
            </p>

            <!-- Action Buttons -->
            <div class="d-grid gap-2">
              <button
                v-if="car.availability"
                class="btn btn-warning btn-sm mt-3"
                @click="updateAvailability(car.id, false)"
              >
                Mark as Occupied
              </button>
              <button
                v-else
                class="btn btn-success btn-sm mt-3"
                @click="updateAvailability(car.id, true)"
              >
                Mark as Available
              </button>

              <button
                class="btn btn-primary btn-sm mt-2"
                @click="editCar(car)"
              >
                Edit
              </button>

              <button
                class="btn btn-danger btn-sm mt-2"
                @click="deleteCar(car.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Car Modal -->
    <div
      class="modal fade"
      id="editCarModal"
      tabindex="-1"
      aria-labelledby="editCarModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editCarModalLabel">Edit Car</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateCar">
              <div class="mb-3">
                <label for="carName" class="form-label">Car's Owner</label>
                <input
                  type="text"
                  class="form-control"
                  id="carName"
                  v-model="editForm.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="carModel" class="form-label">Model</label>
                <input
                  type="text"
                  class="form-control"
                  id="carModel"
                  v-model="editForm.model"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="carCategory" class="form-label">Category</label>
                <select
                  id="carCategory"
                  v-model="editForm.category"
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
              </div>
              <div class="mb-3">
                <label for="carPrice" class="form-label">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="carPrice"
                  v-model="editForm.price"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { db } from "../firebaseConfig";
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      cars: [], // Array to store car data
      editForm: {
        id: null,
        name: "",
        model: "",
        category: "",
        price: 0,
      },
    };
  },
  methods: {
    fetchCars() {
      const carsCollection = collection(db, "cars");
      onSnapshot(carsCollection, (snapshot) => {
        this.cars = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async updateAvailability(carId, status) {
      try {
        const carDoc = doc(db, "cars", carId);
        await updateDoc(carDoc, { availability: status });
        alert(`Car marked as ${status ? "available" : "occupied"}!`);
      } catch (error) {
        console.error("Error updating availability: ", error);
      }
    },

    async deleteCar(carId) {
      try {
        const carDoc = doc(db, "cars", carId);
        await deleteDoc(carDoc);
        alert("Car deleted successfully!");
      } catch (error) {
        console.error("Error deleting car: ", error);
      }
    },

    editCar(car) {
      this.editForm = { ...car };
      const modalElement = document.getElementById("editCarModal");
      const modal = new Modal(modalElement);
      modal.show();
    },

    async updateCar() {
      try {
        const carDoc = doc(db, "cars", this.editForm.id);
        await updateDoc(carDoc, { ...this.editForm });
        alert("Car updated successfully!");
        const modal = Modal.getInstance(document.getElementById("editCarModal"));
        modal.hide();
      } catch (error) {
        console.error("Error updating car: ", error);
      }
    },
  },
  created() {
    this.fetchCars();
  },
};
</script>


<style scoped>
.card {
  border: 1px solid #000000;
  border-radius: 8px;
  height: 100%;
}

.card-body {
  background-color: #1e90ff;
  color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 4px 6px rgb(75, 75, 75);
  transition: transform 0.5s;
}

.card-title {
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 10px;
}

.badge {
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 4px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn-warning {
  background-color: #f39c12;
  border: none;
  color: white;
}

.btn-success {
  background-color: #28a745;
  border: none;
  color: white;
}

.btn-primary {
  background-color: #444444;
  border: none;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  border: none;
  color: white;
}

.d-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.modal-content {
  border-radius: 8px;
  padding: 15px;
}

.form-label {
  font-weight: bold;
}
</style>
