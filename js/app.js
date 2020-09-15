const submissionComponent = {
	template: `<div style="display: flex; width: 100%">
	             <span class="col-lg-4 col-md-4 col-sm-12 image">
	                <img width='100px' height='100px'
                            v-bind:src="submission.submissionImage"></span>
                      <article class="col-lg-4 col-md-4 col-sm-12 ">
                        <h6 class="text-primary">{{ submission.title }}<span class="small">#{{submission.id}}</span>
                        </h6>
                        <p class="para">{{ submission.description }}</p>
                        <small>
                            Submitted by:
                            <img width="24px" height="24px" v-bind:src="submission.avatar">
                       </small>
                      </article>
                    <span class="col-lg-4 col-md-4 col-sm-12 " v-on:click="submission.votes++"><i
                            class="fas fa-chevron-up "></i>
                        <strong class="votes text-primary"> {{submission.votes }}</strong>
                        <span>
		</div>`,
	props: ['submission', 'submissions'],
};

new Vue({
	el: '#upvote',
	data: {
		submissions: [
			{
				id: 1,
				title: 'Yellow Pail',
				description: 'On demand castle is everywhere in africa and the united states',
				url: '#',
				votes: 16,
				avatar: './img/img1.jpg',
				submissionImage: './img/img1.jpg',
			},
			{
				id: 2,
				title: 'Blisful Goku',
				description: 'Training hard to be the best that we can,power rangers',
				url: '#',
				votes: 11,
				avatar: './img/img2.jpg',
				submissionImage: './img/img2.jpg',
			},
			{
				id: 3,
				title: 'TheNextCode',
				description: 'The time for embrace change is now and forever',
				url: '#',
				votes: 17,
				avatar: './img/img3.jpg',
				submissionImage: './img/img3.jpg',
			},
			{
				id: 4,
				title: 'Vegita et vegito',
				description: 'You can never surpass me kakarrot,for i will always be thriving hard to be the best',
				url: '#',
				votes: 9,
				avatar: './img/img4.jpg',
				submissionImage: './img/img4.jpg',
			},
			{
				id: 5,
				title: '	Umasoft Developers',
				description: 'We solve problems and make your life easier',
				url: '#',
				votes: 20,
				avatar: './img/img5.jpg',
				submissionImage: './img/img5.jpg',
			},
			{
				id: 6,
				title: '	Atornel Developers',
				description: 'Coding is passion,Building is occupation.we always build',
				url: '#',
				votes: 19,
				avatar: './img/img6.jpg',
				submissionImage: './img/img6.jpg',
			},
			// ...
		],
	},
	computed: {
		sortedSubmissions: function() {
			return this.submissions.sort((a, b) => {
				return b.votes - a.votes;
			});
		},
	},

	components: {
		'submission-component': submissionComponent,
	},
});
