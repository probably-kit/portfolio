import React from 'react';
import SkillCard from './SkillCard';

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-grid-container">
      {/* Section Title */}
      <div className="grid-item long">
        <p className="crursive-title">Skills</p>
      </div>

      
      <SkillCard
        className="light"
        title="JavaScript"
        description="In my projects, I leverage JavaScript to build dynamic interfaces with React,
          manage dependencies with Webpack, and maintain code quality using Jest."
        svg={
            <svg viewBox="0 0 128 128">
            <path fill="gray" d="M1.408 1.408h125.184v125.185H1.408z"></path>
            <path fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z">
            </path>
        </svg>
        }
      />

      
      <SkillCard
        title="node.js"
        description="By integrating Express into my Node.js projects, I create RESTful APIs that simplify 
          communication between clients and servers."
        svg={
            <svg viewBox="0 0 128 128">
            <path fill="gray"
                d="M86.072 24.664a.71.71 0 0 0-.351.09.755.755 0 0 0-.375.637v18.93a.564.564 0 0 1-.264.464.549.549 0 0 1-.52 0l-3.066-1.773a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.754 1.28v14.238c0 .524.291 1.021.754 1.283l12.27 7.135a1.486 1.486 0 0 0 1.476 0l12.27-7.135c.463-.262.754-.759.754-1.283V30.168c0-.553-.291-1.05-.754-1.31l-7.32-4.104a.836.836 0 0 0-.374-.09zM13.686 42.43c-.23 0-.461.086-.663.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.101c0 .263.142.526.374.643a.656.656 0 0 0 .725 0l7.295-4.193a1.48 1.48 0 0 0 .75-1.282v-8.939c0-.524.29-1.021.754-1.283l3.095-1.805a1.39 1.39 0 0 1 .752-.203c.26 0 .522.057.725.203l3.096 1.805c.463.262.754.759.754 1.283v8.94c0 .522.288 1.02.75 1.28l7.236 4.194a.704.704 0 0 0 .752 0 .724.724 0 0 0 .377-.643V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201h-.121zm100.67.207v.002l-.002.002c-.253 0-.505.065-.737.197l-12.271 7.13c-.463.264-.75.759-.75 1.284v14.24c0 .524.287 1.02.75 1.281l12.183 6.989a1.43 1.43 0 0 0 1.448 0l7.38-4.133a.724.724 0 0 0 .375-.643.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.645V56.11a.72.72 0 0 1 .375-.638l3.854-2.213a.705.705 0 0 1 .752 0l3.845 2.213a.762.762 0 0 1 .377.638v3.494c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .727-1.28V51.22c0-.524-.292-1.019-.727-1.282l-12.181-7.101a1.499 1.499 0 0 0-.74-.201zm-67.043.049a1.374 1.374 0 0 0-.682.183l-12.17 7.067 4.258 7.81L47.457 42.7a2 2 0 0 0-.143-.013h-.002zm.566.148 8.607 14.814 4.045-7.445a1.34 1.34 0 0 0-.25-.201l-6.271-3.643-6.037-3.488c-.03-.015-.063-.025-.094-.037zm-.25.06-8.774 15.104 8.702 15.965c.024-.005.048-.007.072-.014l8.719-16.047-8.72-15.007zm-13.377 7.172a1.35 1.35 0 0 0-.576 1.123V65.49c0 .228.062.45.168.647l4.728-8.143-4.32-7.928zm26.45.342-4.071 7.49 4.318 7.434V51.189c0-.28-.092-.553-.248-.78zm20.056 2.865c.065 0 .13.015.19.045l4.193 2.448c.116.058.175.201.175.318v4.893c0 .146-.06.264-.175.322l-4.196 2.445a.431.431 0 0 1-.377 0l-4.195-2.443c-.116-.058-.176-.205-.176-.322v-4.893c0-.146.061-.261.176-.32l4.195-2.448a.425.425 0 0 1 .19-.045zm33.555 1.98a.26.26 0 0 0-.145.046l-2.346 1.369a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.369a.262.262 0 0 0 .289 0l2.344-1.37a.308.308 0 0 0 .144-.261V56.93a.303.303 0 0 0-.144-.26l-2.344-1.371a.26.26 0 0 0-.144-.043v-.002zm-57.819 2.9-8.512 15.665.014-.007 12.287-7.137c.343-.194.563-.526.637-.903l-4.426-7.619zm-17.783.095-4.715 8.117c.1.123.217.23.35.31L46.5 73.737l.13.075h.003a1.377 1.377 0 0 0 .3.126c.031.01.062.015.092.022.06.013.118.022.178.027.029.003.057.002.086.002l-8.578-15.74zm24.51 13.393c-.427 0-.853.1-1.215.304l-11.55 6.73A2.457 2.457 0 0 0 49.24 80.8v13.42c0 .874.463 1.689 1.215 2.127l3.041 1.746c1.475.728 1.995.724 2.66.724 2.17 0 3.416-1.338 3.416-3.638V81.936a.356.356 0 0 0-.345-.352h-1.475a.356.356 0 0 0-.352.352v13.248c0 1.019-1.066 2.039-2.773 1.166l-3.156-1.834c-.116-.058-.174-.207-.174-.323V80.768c0-.116.058-.263.174-.32l11.545-6.696c.087-.058.232-.058.35 0l11.544 6.695c.115.06.176.176.176.32v13.424c0 .145-.06.265-.176.323l-11.547 6.726c-.087.058-.232.058-.35 0l-2.949-1.777c-.088-.058-.204-.086-.29-.03-.81.468-.953.528-1.735.79-.174.058-.463.172.115.492l3.852 2.303c.376.203.78.318 1.215.318.434 0 .866-.115 1.213-.26L75.98 96.35a2.463 2.463 0 0 0 1.215-2.13V80.8c0-.874-.463-1.686-1.215-2.123l-11.546-6.73a2.488 2.488 0 0 0-1.213-.305zm18.027 6.129a2.236 2.236 0 0 0-2.227 2.244 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.23-1.02 2.23-2.242a2.254 2.254 0 0 0-2.23-2.243v-.001zm-.03.376h.003a1.86 1.86 0 0 1 1.883 1.868c0 1.02-.841 1.89-1.883 1.89-1.012 0-1.854-.842-1.854-1.89s.87-1.866 1.852-1.868zm-.81.614v2.56h.494v-1.013h.438c.174 0 .23.058.26.203 0 .03.086.669.086.785h.52c-.06-.116-.087-.468-.116-.672-.028-.32-.056-.551-.404-.58.174-.059.46-.145.46-.611 0-.67-.58-.67-.869-.67l-.869-.002zm.438.408h.402c.146 0 .379 0 .379.35 0 .116-.059.35-.379.35h-.402v-.7zm-14.469 2.01c-3.3 0-5.272 1.399-5.272 3.758 0 2.534 1.969 3.228 5.124 3.548 3.79.38 4.08.935 4.08 1.692 0 1.31-1.042 1.861-3.473 1.861-3.068 0-3.735-.757-3.967-2.299 0-.176-.14-.29-.314-.29H61.05a.35.35 0 0 0-.35.35c0 1.98 1.044 4.307 6.11 4.307 3.645 0 5.755-1.456 5.755-4.02 0-2.503-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.32-1.629 2.98-1.629 2.375 0 3.272.524 3.62 2.125a.34.34 0 0 0 .316.264h1.534c.087 0 .177-.057.236-.115a.476.476 0 0 0 .086-.264c-.231-2.795-2.053-4.076-5.758-4.076z">
            </path>
        </svg>
        }
      />

    
      <div className="grid-item hide-on-small-screen" />

      {/* Example 3: MongoDB Card */}
      <SkillCard
        className="light"
        title="MongoDB"
        description="I incorporate MongoDB for flexible schemas, efficient CRUD operations, and seamless data management."
        svg={
            <svg viewBox="0 0 128 128">
            <path fill="gray" fill-rule="evenodd" clip-rule="evenodd"
                d="M82.803 34.23c-2.604-8.108-6.781-15.284-12.667-21.459-1.488-1.562-3.142-2.993-4.18-4.936-.656-1.23-1.281-2.477-1.92-3.715l-.406-1.021-.113.402c-.053 2.02-1.197 3.389-2.621 4.668-1.604 1.438-3.096 3-4.636 4.509l-4.736 6.229-3.829 7.042-2.561 6.915-.077.107c-1.409 4.629-2.104 9.389-2.445 14.195-.129 1.807.019 3.639.12 5.455.145 2.596.596 5.147 1.272 7.66 2.457 9.126 7.444 16.695 14.263 23.127 1.266 1.195 2.635 2.282 3.956 3.418l.585 2.008.544 3.116.26 3.253c-.003.66-.03 1.323.009 1.981.011.169.231.325.355.487l1.104.388 1.149.447-.197-2.891-.009-2.848.397-4.338.288-.944.825-1.461c1.018-.818 2.109-1.562 3.036-2.473 1.677-1.647 3.351-3.317 4.852-5.122a38.489 38.489 0 004.969-7.636c.899-1.833 1.747-3.703 2.448-5.618.618-1.688 1.001-3.463 1.488-5.2l.128-.375c1.005-4.688 1.174-9.424.805-14.19-.297-3.841-1.2-7.548-2.456-11.18zm-19.9 50.275c.154-.771.345-1.538.484-2.312-.139.774-.329 1.541-.484 2.312zm3.417.532l-.646-1.415.646 1.415.949.811-.949-.811zm40.154 17.927c-.826-1.583-2.038-2.785-3.64-3.574-1.342-.66-2.785-.95-4.269-.992-1.112-.032-2.228.025-3.342.039-.989.012-1.979.029-2.968.02-1.163-.012-2.326-.047-3.489-.08-.193-.006-.33.033-.42.229-.141.305-.308.599-.481.933l.194.062c.577.102 1.157.189 1.731.304.738.147 1.07.571 1.104 1.193.05.886.07 1.774.067 2.662-.015 3.514-.04 7.028-.066 10.541-.002.232-.006.474-.069.692-.073.252-.152.578-.34.702a2.907 2.907 0 01-1.115.425c-.561.092-.655.117-.83.669l-.076.276c-.084.301-.039.36.275.363 1.802.02 3.603.059 5.404.053 1.643-.006 3.286.094 4.923-.215 1.547-.291 2.991-.801 4.309-1.664 1.71-1.121 2.94-2.619 3.589-4.574.524-1.579.641-3.19.463-4.841a8.928 8.928 0 00-.954-3.223zm-3.157 9.661c-.964 1.794-2.402 2.992-4.457 3.308-1.287.197-2.576.14-3.803-.347-.777-.308-1.066-.979-1.09-1.772a82.426 82.426 0 01-.033-2.332c-.004-2.734-.004-5.468 0-8.201.002-.861.017-1.724.031-2.586.01-.606.137-.809.728-.858 2.596-.218 5.073.062 7.13 1.889 1.272 1.13 1.996 2.571 2.297 4.226.125.69.163 1.396.241 2.096-.063 1.598-.279 3.153-1.044 4.577zm21.789-2.961c-.512-1.246-1.482-2.027-2.701-2.527-.416-.171-.845-.312-1.294-.478l.157-.1c.485-.311 1.025-.562 1.443-.945 1.016-.931 1.438-2.102 1.24-3.493-.188-1.323-.848-2.294-2.027-2.924-1.07-.57-2.224-.778-3.418-.777-2.066.002-4.133.033-6.199.037-.712.001-1.424-.052-2.136-.062-.138-.002-.343.033-.402.125-.163.25-.271.538-.387.816-.067.162-.001.251.184.275.497.068.993.153 1.491.227.688.103 1.021.461 1.063 1.154l.009.411c.001 2.155.008 4.31-.001 6.465a926.932 926.932 0 01-.061 6.456c-.003.271-.04.543-.079.812-.059.406-.276.686-.692.774l-1.177.232c-.139.028-.34.024-.397.11-.216.323-.39.676-.366 1.102l.121.033 3.953.097.793-.003c1.368-.016 2.738.011 4.104-.059 1.479-.074 2.868-.513 4.152-1.268 1.367-.805 2.419-1.866 2.793-3.462.24-1.019.241-2.044-.166-3.028zm-10.043-9.181c.006-.433.197-.621.627-.632 1.059-.029 2.111-.023 3.133.342 1.322.472 2.135 1.612 2.12 3.005-.007.535.001 1.065-.196 1.579-.389 1.012-1.135 1.546-2.193 1.65-.552.056-1.109.062-1.601.088l-1.642-.072c-.218-.008-.313-.104-.312-.328l.064-5.632zm6.806 13.494c-.529 1.151-1.493 1.756-2.7 1.966a6.823 6.823 0 01-2.892-.127c-.706-.181-.994-.748-1.135-1.377-.095-.421-.079-.922-.087-1.36-.013-.676-.003-2.079-.003-2.079h-.014c0-1 .003-1.866-.003-2.825-.001-.207.034-.31.287-.302.898.027 1.799.042 2.697.077.803.031 1.555.269 2.262.65 1.076.58 1.724 1.468 1.902 2.688.136.925.078 1.835-.314 2.689zm-98.587 1.078l.019-5.437c.003-.818-.101-1.62-.369-2.396-.739-2.137-2.777-3.11-4.899-2.343-.965.349-1.83.878-2.656 1.478-.481.35-.481.35-.829-.149-.985-1.412-2.392-1.895-4.03-1.374-1.059.336-1.985.911-2.862 1.579-.082.062-.247.131-.296.094-.082-.061-.139-.206-.137-.315l.06-.966c.005-.203-.034-.407-.054-.62-.396.137-.712.274-1.043.354-1.023.25-2.053.48-3.082.715-.249.057-.512.132-.536.418-.025.281.246.328.456.412.442.178.881.367 1.318.559.367.162.504.455.502.849-.007 1.685.004 3.368-.006 5.053-.004.685-.036 1.369-.067 2.054-.028.607-.235.861-.823 1.014-.312.082-.629.137-.943.211-.069.016-.187.06-.188.094-.013.297-.029.601.021.89.01.052.324.052.498.072l.117-.007c1.212-.018 2.424-.037 3.637-.05.643-.007 1.285-.001 1.983-.001l.075-.97c-.4-.073-.757-.128-1.109-.205-.549-.12-.783-.411-.797-.965l-.01-.793c-.006-2.057-.014-4.113-.014-6.17 0-.299.124-.536.387-.715.557-.376 1.145-.675 1.796-.842 1.372-.351 2.562.137 3.09 1.304.167.368.298.775.335 1.175.194 2.062.11 4.126-.007 6.188-.025.445-.234.669-.673.778l-1.032.218c-.083.021-.204-.035-.21.034-.023.285-.01.722-.01.722h.246l3.142.103c.861-.002 1.723.102 2.583.124.154.003.291.026.3-.152a8.492 8.492 0 00-.011-.829l-.164-.029-.885-.199c-.597-.141-.803-.368-.805-.972-.007-1.489.013-2.977 0-4.465a45.225 45.225 0 00-.095-2.551c-.015-.226.02-.374.2-.501a5.311 5.311 0 011.732-.835c1.935-.51 3.519.551 3.619 2.546.098 1.924.057 3.855.042 5.783-.005.671-.227.874-.888 1.054l-.228.059c-.677.162-.671.162-.631.881.013.225.075.283.315.277 1.379-.031 2.758-.039 4.137-.051.564-.005 1.128 0 1.742 0l.125-.936c-.539-.143-1.036-.249-1.516-.406-.424-.144-.574-.4-.572-.848zm47.489-8.241c.568-.527.572-1.223.413-1.996-.45.471-.954.688-1.529.729-.771.055-1.528-.012-2.246-.319-1.942-.834-3.854-.775-5.76.14-1.603.768-2.589 1.965-2.688 3.78-.063 1.163.155 2.264.931 3.189.465.554 1.062.913 1.735 1.161.29.107.312.245.069.43a7.01 7.01 0 01-.557.38 73.2 73.2 0 01-1.226.754c-.241.146-.323.332-.244.617.231.838.826 1.322 1.57 1.675l.271.189-.237.237c-.729.591-1.487 1.149-2.185 1.776-.586.527-.775 1.233-.598 2.012.357 1.555 1.388 2.517 2.851 2.959 2.557.774 4.958.33 7.147-1.185 1.298-.899 2.229-2.069 2.512-3.679.317-1.809-.688-3.379-2.487-3.703-1.19-.216-2.408-.278-3.612-.416-.562-.064-1.132-.102-1.679-.231-.465-.11-.696-.489-.653-.859.043-.364.43-.703.873-.738.892-.072 1.766-.211 2.588-.587 2.178-.996 3.189-2.74 2.936-5.088-.033-.316-.105-.628-.17-.996.697.117 1.41.294 1.975-.231zm-6.609 11.017c.886.026 1.894.081 2.868.366.857.25 1.562.688 1.77 1.645.251 1.156-.305 2.306-1.424 2.924-1.048.578-2.186.626-3.34.507-.988-.102-1.877-.444-2.589-1.174-.938-.961-.943-2.291-.004-3.249.839-.856 1.288-1.033 2.719-1.019zm2.217-6.962c-.516 1.651-2.018 1.879-3.195 1.351-1.003-.449-1.44-1.333-1.669-2.342-.089-.388-.11-.791-.162-1.188.021-.569.115-1.115.36-1.627.751-1.577 2.596-1.483 3.617-.769.438.306.743.722.934 1.215a4.998 4.998 0 01.115 3.36zm-9.37 5.263a7.984 7.984 0 01-1.057-.236c-.608-.186-.682-.3-.689-.943-.018-1.792-.03-3.584-.05-5.375-.01-.806-.106-1.601-.353-2.371-.65-2.03-2.641-3.12-4.633-2.521-1.104.333-2.052.952-2.935 1.679l-.322.247.001-.331c.021-.381.062-.762.059-1.143-.002-.199-.078-.399-.115-.574-.753.227-1.428.455-2.117.629-.691.174-1.396.292-2.095.434-.347.07-.602.28-.596.519.009.337.288.402.532.503.442.181.883.364 1.32.558.312.139.439.397.436.732-.022 2.329-.036 4.659-.07 6.989-.01.736-.196.93-.92 1.092l-.316.063c-.67.115-.689.142-.643.849l.004.117c-.008.272.111.36.391.357 1.78-.021 3.561-.031 5.341-.024.763.003.845-.057.829-.841l-.036-.337c-.436-.073-.853-.126-1.261-.216-.427-.095-.58-.27-.62-.704-.037-.397-.049-.8-.053-1.2-.02-1.831-.036-3.662-.045-5.492-.002-.461.083-.889.507-1.186a4.14 4.14 0 012.125-.762c1.588-.109 2.795.832 2.881 2.415.106 1.953.074 3.913.099 5.87.002.146-.024.293-.044.438-.038.286-.178.501-.468.575-.283.074-.57.14-.859.184-.431.064-.44.061-.473.496l.011.293c.051.506.052.491.564.486 1.722-.014 3.443-.023 5.164-.021.72.002.771-.032.777-.774l-.002-.176c.011-.19-.074-.267-.269-.298zm24.052-11.323c-1.805-.441-3.517-.113-5.143.728-1.58.817-2.636 2.08-3.038 3.824-.406 1.763-.212 3.483.567 5.12.507 1.063 1.287 1.885 2.349 2.419 2.486 1.252 5.527.684 7.477-.991 1.539-1.321 2.104-3.08 2.138-5.257-.021-.218-.042-.638-.1-1.054-.327-2.37-1.968-4.231-4.25-4.789zm1.367 9.155c-.479 1.886-2.11 2.724-3.95 2.076-.939-.33-1.641-.961-2.113-1.814-1.086-1.96-1.295-4.044-.677-6.182.412-1.424 1.584-2.203 2.978-2.105 1.246.087 2.204.685 2.907 1.699.741 1.07 1.027 2.287 1.103 3.565.013.205.002.41.002.616l.088.01c-.11.713-.162 1.44-.338 2.135zm-46.764-9.186c-1.899-.434-3.678-.005-5.326.96-1.425.834-2.346 2.08-2.699 3.708-.331 1.521-.196 3.016.343 4.473.328.888.825 1.669 1.554 2.278 1.535 1.281 3.329 1.605 5.238 1.248 1.616-.303 3.036-1.021 4.068-2.364.966-1.256 1.334-2.698 1.372-4.261-.057-.495-.071-.999-.176-1.482-.522-2.411-1.932-4.003-4.374-4.56zm1.549 9.18c-.463 1.876-2.12 2.735-3.947 2.087-1.173-.417-1.937-1.276-2.42-2.377-.774-1.769-.932-3.61-.431-5.476.384-1.427 1.541-2.478 3.312-2.226 1.087.154 1.935.709 2.567 1.592.854 1.191 1.135 2.555 1.174 3.988v.293l.072.011c-.105.704-.157 1.42-.327 2.108z">
            </path>
        </svg>
        }
      />

      
      <SkillCard
        title="HTML & CSS"
        description="I harness HTML and CSS to craft visually engaging layouts, using CSS animations for better user experience."
        svg={
            <svg viewBox="0 0 128 128">
            <path fill="gray"
                d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z">
            </path>
        </svg>
        }
      />

      
      <SkillCard
        className="light"
        title="git"
        description="I leverage Git for version control, branching strategies, and CI/CD pipelines with GitHub Actions."
        svg={
            <svg viewBox="0 0 128 128">
            <path fill="gray"
                d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z">
            </path>
        </svg>
        }
      />
    </div>
  );
};

export default SkillsSection;
