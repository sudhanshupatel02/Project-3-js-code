console.log('This is my index .js file');
// 2dfcc20cf21742789fb4a4e0f7a344f0

let newsAccordion = document.getElementById('newsAccordion');

let news = `  <p>
<a class="btn btn-primary"  data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
  aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample1">
     <div class="card card-body">
      Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden
      by default but revealed when the user activates the relevant trigger.
     </div>
   </div>
 </div>
</div>`