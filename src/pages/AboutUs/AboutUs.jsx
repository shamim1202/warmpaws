const AboutUs = () => {
  return (
    <div>
      {/* <!-- Mission & Vision Section --> */}
      <section class="mission-vision-section container mx-auto px-6 py-12">
        <h2 class="text-4xl font-bold text-center mb-12 text-primary">
          Our Mission & Vision
        </h2>

        <div class="flex flex-col md:flex-row items-center gap-10">
          {/* <!-- Image --> */}
          <div class="flex-1">
            <img
              src="https://images.pexels.com/photos/4161609/pexels-photo-4161609.jpeg"
              alt="Pet Care"
              class="rounded-lg shadow-lg w-full object-cover h-full"
            />
          </div>

          {/* <!-- Content --> */}
          <div class="flex-1 space-y-6">
            <div>
              <h3 class="text-2xl font-semibold mb-2 text-secondary">
                Our Mission
              </h3>
              <p class="text-gray-500">
                At <strong>PetWarmPaws</strong>, our mission is to provide
                compassionate, high-quality care for every pet. We aim to ensure
                their health, happiness, and well-being, while giving pet owners
                confidence and peace of mind.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-semibold mb-2 text-secondary">
                Our Vision
              </h3>
              <p class="text-gray-500">
                We envision a world where every pet receives professional care,
                love, and attention. Our goal is to be the most trusted pet-care
                service, known for excellence, innovation, and community
                support.
              </p>
            </div>

            <a
              href="/contact"
              class="inline-block mt-4 bg-primary text-white px-6 py-3 rounded transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* <!-- About Us / Realistic Service Team --> */}
      <section class="service-team-section container mx-auto px-6 py-12">
        <h2 class="text-4xl font-bold text-center mb-8 text-primary">
          Meet Our Service Team
        </h2>
        <p class="text-center max-w-2xl mx-auto mb-12 text-lg text-gray-500">
          Our dedicated team works behind the scenes to ensure every pet and
          owner receives excellent service. From management to front-line care,
          meet the people who make PetWarmPaws possible.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Team Member: General Manager --> */}
          <div class="team-member shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://i.ibb.co.com/Z21x7jH/luxury-travel-guide.jpg"
              alt="John Miller"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold text-primary">John Miller</h3>
            <p class="text-secondary">Manager</p>
            <div className="text-gray-600">
              <p class="mt-2 text-sm">
                <strong>Experience:</strong> 12 years in pet-care management
              </p>
              <p class="text-sm">
                <strong>Role:</strong> Oversees all operations, staff
                management, and customer satisfaction
              </p>
            </div>
          </div>

          {/* <!-- Team Member: Shop Manager --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://i.ibb.co.com/7KCFKFT/family-travel-guide.jpg"
              alt="Sarah Thompson"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold text-primary">Sarah Thompson</h3>
            <p class="text-secondary">Shop Manager</p>
            <div className="text-gray-600">
              <p class="mt-2 text-sm">
                <strong>Experience:</strong> 8 years managing pet stores
              </p>
              <p class="text-sm">
                <strong>Role:</strong> Manages inventory, supplies, and daily
                shop operations
              </p>
            </div>
          </div>

          {/* <!-- Team Member: Sales Executive --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
              alt="David Wilson"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold text-primary">David Wilson</h3>
            <p class="text-secondary">Sales Executive</p>
            <div className="text-gray-600">
              <p class="mt-2 text-sm">
                <strong>Experience:</strong> 5 years in pet product sales
              </p>
              <p class="text-sm">
                <strong>Role:</strong> Guides customers on pet supplies and
                ensures satisfaction
              </p>
            </div>
          </div>

          {/* <!-- Team Member: Assistant / Receptionist --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
              alt="Emily Clark"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold text-primary">Emily Clark</h3>
            <p class="text-secondary">Assistant / Receptionist</p>
            <div className="text-gray-600">
              <p class="mt-2 text-sm">
                <strong>Experience:</strong> 3 years in pet service support
              </p>
              <p class="text-sm">
                <strong>Role:</strong> Welcomes customers, schedules appointments, assists in
                daily tasks
              </p>
            </div>
          </div>
        </div>

        {/* <!-- CTA --> */}
        <div class="mt-12 text-center">
          <p class="mb-4 text-lg">
            Have questions or want to reach any of our team members? Contact us
            today!
          </p>
          <a
            href="/contact"
            class="bg-primary text-white px-6 py-3 rounded  transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
