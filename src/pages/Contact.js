import SectionTitle from "../components/Common/SectionTitle";
import PageBanner from "../components/PageBanner/PageBanner";

const Contact = () => {
  return (
    <div>
      <div className="max-w-full">
        <PageBanner title={"Contact Us"} />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE – INFO */}
          <div>
            <div className="text-left">
              <SectionTitle
                title="Quick Contact"
                subtitle={
                  <>
                    Have Questions ? <br />
                    Don't Hesitate to Contact Us
                  </>
                }
                isCenter={false}
              />
            </div>
          

            <p className="mt-6 text-base font-medium text-gray-500 leading-relaxed max-w-lg">
              Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
              magna suscipit, fermentum mattis erat rutrum.
            </p>

            {/* Location */}
            <div className="mt-10 flex items-start gap-4">
              <div className="text-brand text-3xl">🌍</div>
              <div>
                <h4 className="font-semibold text-lg text-brand">Location</h4>
                <p className="text-gray-500">
                  141, First Floor, 12 St Roots Terrace, <br />
                  Los Angeles 90010, USA
                </p>
              </div>
            </div>

            <hr className="my-10" />

            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-brand">
                  Quick Contact
                </h4>
                <p className="mt-2 text-gray-500">
                  <strong>Phone:</strong> +1 89-636-48018
                </p>
                <p className="text-gray-500">
                  <strong>Email:</strong> yourmail@info.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-brand">
                  Opening Hrs
                </h4>
                <p className="mt-2 text-gray-500">
                  <strong>Mon - Friday:</strong> <br />
                  09:00 am – 07:00 pm
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div>
            <div className="text-left">
              <SectionTitle
                title=" Let’s Connect"
                subtitle="Send Your Message"
                isCenter={false}
              />
            </div>

            <p className="mt-4 max-w-md text-base font-medium text-gray-500">
              Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
              magna suscipit.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-50 border placeholder-brand border-gray-200 px-7 py-3 focus:outline-none focus:ring-1 focus:ring-brand"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-50 border placeholder-brand border-gray-200 px-7 py-3 focus:outline-none focus:ring-1 focus:ring-brand"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full bg-gray-50 border placeholder-brand border-gray-200 px-7 py-3 focus:outline-none focus:ring-1 focus:ring-brand"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-50 border placeholder-brand border-gray-200 px-7 py-3 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <textarea
                rows="6"
                placeholder="Your message here"
                className="w-full bg-gray-50 border placeholder-brand border-gray-200 px-7 py-3 focus:outline-none focus:ring-1 focus:ring-brand"
              ></textarea>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <input type="checkbox" />
                Save my name and email for next time.
              </div>

              <button
                type="submit"
                className="bg-brand text-white px-10 py-3 font-semibold hover:bg-brand-700 transition"
              >
                Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
