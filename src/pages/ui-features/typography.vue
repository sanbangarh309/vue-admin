<template>
  <div>
    <el-card>
      <el-row>
        <el-col span="12">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <code>
            <div>&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;</div>
            <div>&lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;</div>
            <div>&lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;</div>
            <div>&lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;</div>
            <div>&lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;</div>
            <div>&lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;</div>
          </code>
        </el-col>
        <el-col span="12">
          <p class="h1">h1. Bootstrap heading</p>
          <p class="h2">h2. Bootstrap heading</p>
          <p class="h3">h3. Bootstrap heading</p>
          <p class="h4">h4. Bootstrap heading</p>
          <p class="h5">h5. Bootstrap heading</p>
          <p class="h6">h6. Bootstrap heading</p>
          <code>
            <div>&lt;p class="h1"&gt;h1. Bootstrap heading&lt;/p&gt;</div>
            <div>&lt;p class="h2"&gt;h2. Bootstrap heading&lt;/p&gt;</div>
            <div>&lt;p class="h3"&gt;h3. Bootstrap heading&lt;/p&gt;</div>
            <div>&lt;p class="h4"&gt;h4. Bootstrap heading&lt;/p&gt;</div>
            <div>&lt;p class="h5"&gt;h5. Bootstrap heading&lt;/p&gt;</div>
            <div>&lt;p class="h6"&gt;h6. Bootstrap heading&lt;/p&gt;</div>
          </code>
        </el-col>
      </el-row>
    </el-card>
    <el-row gutter="20" class="mt-3">
      <el-col span="12">
        <el-card>
          <p>You can use the mark tag to
            <mark>highlight</mark>
            text.
          </p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
          </p>
          <p><u>This line of text will render as underlined</u></p>
          <p>
            <small>This line of text is meant to be treated as fine print.</small>
          </p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </el-card>
      </el-col>
      <el-col span="12">
        <el-card>
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{}
</script>
