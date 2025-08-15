Create the Idea list component
In components create a new file IdeaList.js 
Create a class IdeaList
In the constructor
this._ideaListEl = document.querySelector('#idea-list');
this._ideas = [
    {
        id: 1,
        text: 'Idea 1,
        tag: 'Business',
        username: 'John',
        data: '02/01/2023'
    },
    {
        id: 2,
        text: 'Idea 2,
        tag: 'Technology',
        username: 'Jill',
        data: '02/01/2023'
    }
];

Then under the cunstructor let's create a method render
render()
this._ideaListEl.innerHTML = this._ideas.map((idea) => {
    return `
    <div class="card">
        <button class="delete"><i class="fas fa-times"></i></button>
        <h3>
        Positive NewsLetter, a newsletter that only shares positive,
        uplifting news
        </h3>
        <p class="tag tag-technology">TECHNOLOGY</p>
        <p>
        Posted on <span class="date">January 1, 2022</span> by
        <span class="author">Tony Stark</span>
        </p>
    </div>
    `;
}).join('');
we get the card from the index.html 
delete in the index all the cards
now at the end of the IdeaList export the IdeaList

export default IdeaList;

then in the index.js let's require it
then in the index.js let's initialize it
const ideaList = new IdeaList();
then render it
ideaList.render();
Now in render of the ideaList update the values from the data like ${idea.text}
Now let's handle the color of the tags
Note that we have classes in the css for tags that matches wit our classes like

        <p class="tag tag-technology

so in the IdeaList.js in the render
First let's create a set of valid tags
After the array of ideas
this._validTags = new Set();
this._validTags.add('technology');
this._validTags.add('software');
this._validTags.add('business');
this._validTags.add('education');
this._validTags.add('health');
this._validTags.add('inventions');

Now above render let's create a getTagClass(tag) method
    tag = tag.toLowerCase()
    let tagClass = '';
    Then check if the tag passed is in the set
    if(this._validTags.has(tag)){
        tagClass = `tag-${tag}`;
    } else {
        tagClass = '';
    }
    return tagClass;
Now in the render before the return
const tagClass = this.getTagClass(idea.tag);
and in the class="tag ${tagClass}"


