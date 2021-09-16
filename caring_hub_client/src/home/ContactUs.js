import React from "react";

export default function ContactUs() {
  return (
    <div id="contact" class="form-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text-container">
              <div class="section-title">GET IN TOUCH OR ASK QUESTION</div>
              <h2>We'd love to get to know you.</h2>
              <p>
                Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem.
                Sed risus ipsum, egestas sed odio in, pulvinar euismod ipsum.
                Sed ut enim non nunc fermentum dictum et sit amet erat. Maecenas
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control-input"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control-input"
                  placeholder="your message or question"
                  required
                />
              </div>

              <div class="form-group">
                <button type="submit" class="form-control-submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
