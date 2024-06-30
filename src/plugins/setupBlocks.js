import { Input, Select, Switch } from 'ant-design-vue';

const basicBlocks = [
  {
    type: 'input',
    material: Input,
  },
  {
    type: 'select',
    material: Select,
  },
  {
    type: 'switch',
    material: Switch,
  },
];

class BlockSuites {
  blocks = basicBlocks;
  getBlock() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]));
  }
  hasBlock(type) {
    return this.blocks.some((block) => block.type === type);
  }
  addBlock(block) {
    this.blocks.push(block);
  }
}

const blocks = new BlockSuites().getBlock();

export const setupBlocks = (App) => {
  const blockSymbol = Symbol('blocks');
  const blocksPlugins = {
    install(app) {
      app.provide(blockSymbol, blocks);
      app.config.globalProperties.$blockSuites = blocks;
    },
  };
  App.use(blocksPlugins);
}
