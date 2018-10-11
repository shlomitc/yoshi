const fs = require('fs');
const path = require('path');
const tempy = require('tempy');
const { expect } = require('chai');
const updateNodeVersion = require('../../src/tasks/update-node-version');

const nodeVersion = fs.readFileSync(
  require.resolve('../../src/tasks/update-node-version/templates/.nvmrc'),
  'utf-8',
);

describe('Update node version', () => {
  let tempDir;
  let userNvmrc;

  beforeEach(() => {
    tempDir = tempy.directory();
    userNvmrc = path.join(tempDir, '.nvmrc');
  });

  it('should update .nvmrc to relevant version as shown in templates', async () => {
    fs.writeFileSync(userNvmrc, '0\n');

    await updateNodeVersion({ base: tempDir });

    expect(fs.readFileSync(userNvmrc, 'utf8')).to.equal(nodeVersion);
  });

  it('should create .nvmrc if it does not exist', async () => {
    await updateNodeVersion({ base: tempDir });

    expect(fs.readFileSync(userNvmrc, 'utf8')).to.equal(nodeVersion);
  });

  it('should not update .nvmrc if project has a higher version set in .nvmrc', async () => {
    const veryHighVersion = '99.0.0\n';

    fs.writeFileSync(userNvmrc, veryHighVersion);

    await updateNodeVersion({ base: tempDir });

    expect(fs.readFileSync(userNvmrc, 'utf8')).to.equal(veryHighVersion);
  });
});
