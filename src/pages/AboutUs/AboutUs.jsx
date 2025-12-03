const AboutUs = () => {
  return (
    <div>
      {/* <!-- Mission & Vision Section --> */}
      <section class="mission-vision-section container mx-auto px-6 py-12">
        <h2 class="text-4xl font-bold text-center mb-12">
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
              <h3 class="text-2xl font-semibold mb-2">Our Mission</h3>
              <p class="text-gray-700">
                At <strong>PetWarmPaws</strong>, our mission is to provide
                compassionate, high-quality care for every pet. We aim to ensure
                their health, happiness, and well-being, while giving pet owners
                confidence and peace of mind.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-semibold mb-2">Our Vision</h3>
              <p class="text-gray-700">
                We envision a world where every pet receives professional care,
                love, and attention. Our goal is to be the most trusted pet-care
                service, known for excellence, innovation, and community
                support.
              </p>
            </div>

            <a
              href="/contact"
              class="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* <!-- About Us / Realistic Service Team --> */}
      <section class="service-team-section container mx-auto px-6 py-12">
        <h2 class="text-4xl font-bold text-center mb-8">
          Meet Our Service Team
        </h2>
        <p class="text-center max-w-2xl mx-auto mb-12 text-lg">
          Our dedicated team works behind the scenes to ensure every pet and
          owner receives excellent service. From management to front-line care,
          meet the people who make PetWarmPaws possible.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Team Member: General Manager --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
              alt="John Miller"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold">John Miller</h3>
            <p class="text-gray-600">Manager</p>
            <p class="mt-2 text-sm">
              Experience: 12 years in pet-care management
            </p>
            <p class="text-sm">
              Role: Oversees all operations, staff management, and customer
              satisfaction
            </p>
          </div>

          {/* <!-- Team Member: Shop Manager --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
              alt="Sarah Thompson"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold">Sarah Thompson</h3>
            <p class="text-gray-600">Shop Manager</p>
            <p class="mt-2 text-sm">Experience: 8 years managing pet stores</p>
            <p class="text-sm">
              Role: Manages inventory, supplies, and daily shop operations
            </p>
          </div>

          {/* <!-- Team Member: Sales Executive --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
              alt="David Wilson"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold">David Wilson</h3>
            <p class="text-gray-600">Sales Executive</p>
            <p class="mt-2 text-sm">Experience: 5 years in pet product sales</p>
            <p class="text-sm">
              Role: Guides customers on pet supplies and ensures satisfaction
            </p>
          </div>

          {/* <!-- Team Member: Assistant / Receptionist --> */}
          <div class="team-member bg-white shadow-lg rounded-lg p-5 text-center hover:shadow-xl transition">
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
              alt="Emily Clark"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 class="text-xl font-bold">Emily Clark</h3>
            <p class="text-gray-600">Assistant / Receptionist</p>
            <p class="mt-2 text-sm">
              Experience: 3 years in pet service support
            </p>
            <p class="text-sm">
              Role: Welcomes customers, schedules appointments, assists in daily
              tasks
            </p>
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
            class="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
