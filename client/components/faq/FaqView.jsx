var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
        <div className='faq-view'>
            <h1>Frequently Asked Questions</h1>

            <div className='faq-item' id='no-company'>
            <p>Q: Why is my company not supported?</p>
            <p>A: In order to create a targeted service, we currently only support a small number of large tech companies that we think should be leading the way with respect to salary transparency.</p>
            </div>

            <div className='faq-item' id='no-data'>
            <p>Q: Why can't I see any data yet?</p>
            <p>A: This is hopefully a very short-lived problem. We need a modest amount of responses for each company and role before we can display that data, please share with friends and check back soon.</p>
            </div>

            <div className='faq-item' id='sensitive'>
            <p>Q: Isn't compensation data sensitive information?</p>
            <p>A: Companies will say that it is, and that it is not generally "safe" to share. However, we think that this is your choice to make, that employees are empowered by sharing compensation information, and that employees as a whole stand to benefit from greater transparency.</p>
            </div>

            <div className='faq-item' id='legal'>
            <p>Q: Is it legal to share my compensation information?</p>
            <p>A: Please check with your local jurisdiction and share only isofar as you are legally able to do so. We cannot offer legal advice. Here is some background for US readers.</p>
            </div>

            <div className='faq-item' id='why-linked-in'>
            <p>Q: Why do I have to sign in with LinkedIn?</p>
            <p>A: Our service aims to provide targeted compensation data that is verified to the best of our ability. In the future, we hope to add other verification mechanisms, but for now, this is the easiest one to get us up and running.</p>
            </div>

            <div className='faq-item' id='data-collection'>
            <p>Q: What data of mine do you collect from LinkedIn?</p>
            <p>A: We scan your LinkedIn profile to try and verify the information you've provided to us, but we do NOT save your full LinkedIn data alongside your compensation data. Rather, we keep your LinkedIn title, your LinkedIn company, and some meta-information about your profile.</p>
            </div>

            <div className='faq-item' id='no-linked-in'>
            <p>Q: But I don't have a LinkedIn profile that I use?</p>
            <p>A: We think that's rad, and aren't huge LinkedIn users ourselves, but unfortunately, that's just how the service works right now. We hope to add more verification mechanisms in the future.</p>
            </div>

            <div className='faq-item' id='sharing'>
            <p>Q: What determines what information I am able to view?</p>
            <p>A: We are iterating on this, but the philosophy is that we display information back to you to the extent that you share it. For example, if you choose not to share your RSU grant, then you will not be able to view any information -- aggregated or individual -- about others' RSU grants. Similarly, you can only see full compensation information if you choose to share full compensation information.</p>
            </div>

            <div className='faq-item' id='security'>
            <p>Q: Is it safe to share compensation information with your service?</p>
            <p>A: Our service is SSL encrypted, and we do not associated PII such as your email address with the compensation data that you provide. That said, whether you feel comfortable sharing really depends on what scenario you are worried about. Please see below for answers to more detailed questions.</p>
            </div>

            <div className='faq-item' id='deidentification'>
            <p>Q: Can my compensation data potentially identify me?</p>
            <p>A: Unfortunately, it can. As a simple example, if you choose the Full sharing setting and your title is "The One and Only Superninja named Dan Auerbach Who Works At Microsoft" then this is pretty obviously identifying. There are more subtle identification attacks as well. Please DO NOT SHARE information at all that you would never, ever want tied back to you.</p>
            </div>

            <div className='faq-item' id='who-can-see'>
            <p>Q: Who can see my compensation data?</p>
            <p>A: The aim of the service is to share data, and so your data will be shared with other members of the service. While we do light background verification of our users, we cannot ensure that *only* your intended audience will see your data. Please use your head, and share only as you are comfortable with other members of our service.</p>
            </div>
      </div>
    );
  }
});
